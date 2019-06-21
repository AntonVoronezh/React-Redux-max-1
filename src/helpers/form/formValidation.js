export const validationForm = controls => {
	const { userLogin, userPassword, someLogin, somePassword } = controls;

	return validationField(userLogin, someLogin) && validationField(userPassword, somePassword);
};

const validationField = (field1, field2) => {
	return field1 === field2;
};

// console.log(validationForm({
//     userLogin:'a',
//     userPassword:'11',
//     someLogin: 'a',
//     somePassword:'1',
// }));

// C:\projects\DZ1>node src/helpers/form/formValidation.js
