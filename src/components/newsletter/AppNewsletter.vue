<template>
    <div class="container news_container">
        <h2>Join our newsletter</h2>
        <div class="form">
            <input type="text" name="" id="" v-model="email">
            <button type="submit" @click.prevent="submitForm()">Subscribe</button>
        </div>
        <div class="error_label">
            <div>{{ error }}</div>
        </div>
        <div class="success_label">
            <div>{{ success }}</div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio similique fugit assumenda autem, maxime labore dolores reiciendis placeat.</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: "",
            error: "",
            success: "",
        }
    },
    methods: {
        submitForm(){
            this.error = "";
            this.success = "";

            let valid = this.validateForm(this.email);

            if (valid[0] === true) {
                this.error = "";
                this.addEmail(this.email);
            }
            else { this.error = valid[1] }
        },
        validateForm(email){
            let valid = [true, ""];

            if (email === ""){
                valid = [false, "Enter your email."]
            }

            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                valid = [false, "Invalid email. Please try again."]
            }

            return valid
        },
        addEmail(email){
            this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
            .then(response => {
                if(Object.getOwnPropertyNames(response.data).length === 0){
                    this.$http.post('users.json', {email: this.email})
                    .then(() => {
                        this.success = "Email added";
                        setTimeout(() => {
                            this.success = "";
                            this.email = "";
                        }, 3000)
                    })
                    .catch(err => {
                        this.error = "Couldn't add email. Try again.";
                        console.log(err)
                    })
                }
                else { this.success = "This email is already on the list." }
            })
            .catch(err => {
                console.log(err);
                this.error = "Something went wrong. Try again."
            })

        },
    }
}
</script>