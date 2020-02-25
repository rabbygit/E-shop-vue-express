import { required, email } from "vuelidate/lib/validators";

const newslatter = {
    data() {
        return {
            email: '',
        };
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        makeToast() {
            if (!this.$v.$invalid) {
                this.$bvToast.toast("You have joined succesfully to our newslatter.", {
                    title: `Congratulations!!`,
                    variant: "success",
                    solid: true
                });
            } else {
                this.$bvToast.toast("Provide a valid email address.", {
                    title: `Sorry!!`,
                    variant: "danger",
                    solid: true
                });
            }
            this.email = '';
        },
        defaultToast() {
            this.$bvToast.toast("We will contact you soon.", {
                title: `Welcome!!`,
                variant: "success",
                solid: true
            });
        }
    }
}

export default newslatter;