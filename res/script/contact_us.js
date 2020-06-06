function ValidateEmailAddress( value )
{
  return value.indexOf( "@" ) > 0;
}

function DecorateElemWithValidationClass( elem, isValid )
{
  elem.className = isValid ? "valid_input_class" : "invalid_input_class";            
}

function ValidateForm()
{
  var firstNameElem = document.getElementById( 'fn' );
  var emailAddressElem = document.getElementById( 'em' );
  var messageElem = document.getElementById( 'msg' );

  var isFirstNameValid = firstNameElem.value.length > 0;
  var isEmailAddressValid = ValidateEmailAddress( emailAddressElem.value );
  var isMessageValid = messageElem.value.length > 0;

  DecorateElemWithValidationClass( firstNameElem, isFirstNameValid );
  DecorateElemWithValidationClass( emailAddressElem, isEmailAddressValid );
  DecorateElemWithValidationClass( messageElem, isMessageValid );

  return isFirstNameValid && isEmailAddressValid && isMessageValid;
}

function ClearForm()
{
  var firstNameElem = document.getElementById( 'fn' );
  var lastNameElem = document.getElementById( 'ln' );
  var emailAddressElem = document.getElementById( 'em' );
  var telephoneElem = document.getElementById( 'tel' );
  var messageElem = document.getElementById( 'msg' );

  firstNameElem.value = "";
  lastNameElem.value = "";
  emailAddressElem.value = "";
  telephoneElem.value = "";
  messageElem.value = "";
}