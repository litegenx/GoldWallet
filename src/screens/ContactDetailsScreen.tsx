import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';

import {
  Button,
  ButtonType,
  FlatButton,
  GenericInputItem,
  Header,
  ScreenTemplate,
  ContactAvatar,
} from 'app/components';
import { CopyButton } from 'app/components/CopyButton';
import { Contact, Route } from 'app/consts';
import { UpdateContactAction, updateContact } from 'app/state/contacts/actions';

const i18n = require('../../loc');

interface Props extends NavigationScreenProps<{ contact: Contact }> {
  updateContact: (contact: Contact) => UpdateContactAction;
}

interface State {
  name: string;
  address: string;
}

export class ContactDetailsScreen extends React.PureComponent<Props, State> {
  static navigationOptions = (props: NavigationScreenProps<{ contact: Contact }>) => ({
    header: <Header navigation={props.navigation} isBackArrow title={props.navigation.getParam('contact').name} />,
  });

  constructor(props: Props) {
    super(props);
    const contact = props.navigation.getParam('contact');
    this.state = {
      name: contact.name,
      address: contact.address,
    };
  }

  setName = (name: string) => {
    this.setState({ name });
    this.saveChanges({ name });
  };

  setAddress = (address: string) => {
    this.setState({ address });
    this.saveChanges({ address });
  };

  saveChanges = (changes: Partial<Contact>) => {
    const contact = this.props.navigation.getParam('contact');
    const updatedContact = { ...contact, ...changes };
    this.props.navigation.setParams({ contact: updatedContact });
    this.props.updateContact(updatedContact);
  };

  navigateToSendCoins = () => {
    this.props.navigation.navigate(Route.SendCoins, {
      toAddress: this.state.address,
    });
  };

  navigateToContactQRCode = () => {
    const contact = this.props.navigation.getParam('contact');
    this.props.navigation.navigate(Route.ContactQRCode, { contact });
  };

  deleteContact = () => {
    const contact = this.props.navigation.getParam('contact');
    this.props.navigation.navigate(Route.DeleteContact, { contact });
  };

  render() {
    const { name, address } = this.state;
    return (
      <ScreenTemplate
        footer={
          <>
            <Button onPress={this.navigateToSendCoins} title={i18n.contactDetails.sendCoinsButton} />
            <Button
              onPress={this.navigateToContactQRCode}
              title={i18n.contactDetails.showQRCodeButton}
              containerStyle={styles.showWalletXPUBContainer}
            />
            <FlatButton
              onPress={this.deleteContact}
              title={i18n.contactDetails.deleteButton}
              containerStyle={styles.deleteWalletButtonContainer}
              buttonType={ButtonType.Warning}
            />
          </>
        }
      >
        <ContactAvatar name={name} />
        <View style={styles.nameInputContainer}>
          <GenericInputItem
            title={i18n.contactDetails.editName}
            label={i18n.contactDetails.nameLabel}
            value={name}
            onSave={this.setName}
          />
        </View>
        <View style={styles.addressInputContainer}>
          <GenericInputItem
            title={i18n.contactDetails.editAddress}
            label={i18n.contactDetails.addressLabel}
            value={address}
            onSave={this.setAddress}
          />
          <CopyButton textToCopy={address} containerStyle={styles.copyButtonContainer} />
        </View>
      </ScreenTemplate>
    );
  }
}

const mapDispatchToProps = {
  updateContact,
};

export default connect(null, mapDispatchToProps)(ContactDetailsScreen);

const styles = StyleSheet.create({
  showWalletXPUBContainer: {
    marginTop: 20,
  },
  deleteWalletButtonContainer: {
    marginTop: 12,
  },
  nameInputContainer: {
    marginTop: 32,
  },
  addressInputContainer: {
    marginTop: 8,
  },
  copyButtonContainer: {
    position: 'absolute',
    right: -6,
    top: -10,
  },
});
