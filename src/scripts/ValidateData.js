module.exports = {
    verifyEmailLength(email) {
        if (email.trim().length <= 100){
            return true
        }
        return false
    },

    verifyPassword(password1, password2){
        if (password1 === password2){
            return true
        }

        return false
    },

    verifyName(name){
        if (name.trim().length <= 12){
            return true
        }
        return false
    },

    verifySurname(surname){
        if (surname.trim().length <= 12){
            return true
        }

        return false
    },

    verifyEmailValid(email){

        if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1){
            let splitEmail = email.split('@')
    
            if (splitEmail[0] !== ''){
                splitEmail = splitEmail[1].split('.')
                
                if
                (
                    splitEmail[0] !== '' &&
                    splitEmail[1] !== '' 
                ){
                    return true
                }
            }
    
            return false
        }
    },

    verifyBio(bio){
        if (bio.trim().length <= 140){
            return true
        }

        return false
    }
}

    






