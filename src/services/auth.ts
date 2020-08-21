export default function signIn () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'o1i2hjoeugv09wubuihn2fkj23hjiod8c89sdvqw3jkfndq2df',
                user: {
                    name: 'pierre',
                    email: 'pierre_enoc@yahoo.fr'
                },
            });

        }, 2000);
    });
}