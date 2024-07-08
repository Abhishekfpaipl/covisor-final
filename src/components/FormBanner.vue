<template>
    <div class="" style="background-color: var(--brand-color);">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5">
                <h5 class="text-white text-uppercase my-1 text-center">{{ text }}</h5>
                <div class="text-center">
                    <h5 class="text-white text-uppercase text-wrap my-1">
                        <span v-if="service">{{ service }}</span> <br>
                    </h5>
                    <p class="text-center text-capitalize fs-5 my-1">
                        <span v-if="customer" class="bg-warning p-2 pe-0">&nbsp;for&nbsp; {{ customer }}</span>
                        <span v-if="category" class="bg-warning text-capitalize p-2 ps-0">&nbsp;from&nbsp; {{ category }}</span>
                    </p>
                    <p class="text-white text-center text-capitalize fs-5 my-1">
                        <span v-if="place" class="text-uppercase">&nbsp;in&nbsp;{{ place }}</span>
                    </p>
                </div>
                <div class="col-12 col-md-6 align-items-center text-center text-md-start">
                    <img src="/img/formwelcome.svg" class="mt-3" style="width: 350px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-3">
                    <h3 class="text-white text-capitalize">{{ formTitle }}</h3>
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-50 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="mt-2 w-50">
                            <select class="form-select py-3" name="CompanyCountry" v-model="selectedCountry"
                                aria-required="true" required="true">
                                <option disabled label="Country/Region" class="text-muted" selected value="">
                                    Country/Region</option>
                                <option v-for="country in countries" :key="country.value" :value="country.value">
                                    {{ country.label }}
                                </option>
                            </select>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>

                        <div class="form-check text-start ms-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                v-model="agree">
                            <label class="form-check-label text-white small" for="flexCheckDefault">
                                I agree to share my contact details
                            </label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-dark text-capitalize"
                                type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FormBanner',
    props: {
        service: {
            type: String,
        },
        category: {
            type: String,
        },
        place: {
            type: String,
        },
        text: {
            type: String,
        },
        formTitle: {
            type: String,
            default: "Request a demo"
        },
        customer: {
            type: String,

        }
    },
    data() {
        return {
            name: "",
            email: "",
            number: "",
            businessName: "",
            note: "",
            title: this.$route.params.name
        }
    }
}
</script>
