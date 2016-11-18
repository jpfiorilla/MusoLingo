let access_token, user_id, user_email, user_photo, credentials;

export default function fb_login(action, handleOauth){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

			FB.api("/me?fields=name,email", (response) => {
				let firstname = response.name.split(" ")[0],
				lastname = response.name.split(" ")[1],
				email = response.email,
				password = user_id;
				FB.api(
					`${response.id}/picture`,
					function (response) {
						console.log(response.data.url);
						user_photo = response.data.url || null;
						credentials = {
							firstname,
							lastname,
							email,
							image: user_photo,
							password
						};
						// HANDLE SUBMIT HERE:
						handleOauth(action, credentials);
					}
				);
			})
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {scope: "public_profile, email"});
}