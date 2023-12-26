export enum ErrorMessages {
  EMPTY_INPUT_MESSAGE = 'Veuillez remplir tous les champs obligatoires pour continuer.',
  EMAIL_ERROR_MESSAGE = 'Please enter a valid email address',
  FIRST_NAME_ERROR = 'Veuillez saisir votre prénom.',
  LAST_NAME_ERROR = 'Veuillez saisir votre nom de famille.',
  EMAIL_ERROR = 'Veuillez fournir votre adresse e-mail.',
  CONDITIONS_ERROR = 'Veuillez accepter les conditions générales.',
  PRIVACY_ERROR = 'Veuillez accepter la politique de confidentialité.',
  PASSWORD_ERROR = 'Veuillez choisir un mot de passe.',
  CONFIRM_PASSWORD_ERROR = 'Veuillez confirmer votre mot de passe.',
  PASSWORDS_NOT_MATCH_ERROR = 'Les mots de passe ne correspondent pas.',
  NEWSLETTER_ERROR = 'Veuillez indiquer si vous souhaitez recevoir notre newsletter.',
  USER_ALREADY_EXIST_ERROR = 'Cet utilisateur existe déjà.',
  PASSWORD_CRITERIA_ERROR = 'Le mot de passe doit contenir au moins 8 caractères, inclure au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial parmi @$!%*?&.',

  //? Address Error
  COUNTRY_EMPTY_ERROR = 'Veuillez sélectionner votre pays.',
  ADDRESS_LINE1_EMPTY_ERROR = 'Veuillez saisir votre adresse ligne 1.',
  CITY_EMPTY_ERROR = 'Veuillez saisir le nom de votre ville.',
  POSTAL_CODE_EMPTY_ERROR = 'Veuillez saisir votre code postal.',

  //? Phone Number
  PHONE_NUMBER_EMPTY_ERROR = 'Veuillez saisir votre numéro de téléphone.',
}
