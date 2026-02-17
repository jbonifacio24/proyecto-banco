<script lang="ts">
import { defineComponent, ref } from 'vue';
import Hero from './Hero.vue';
import Features from './Features.vue';
import Info from './Info.vue';
import Partners from './Partners.vue';
import Services from './Services.vue';
import CTA from './CTA.vue';
import Footer from './Footer.vue';
import PublicLayout from './PublicLayout.vue';
import CreditSimulator from './CreditSimulator.vue';

export default defineComponent({
    name: 'Demo',
    components: {
        Hero,
        Features,
        Info,
        Partners,
        Services,
        CTA,
        Footer,
        PublicLayout,
        CreditSimulator
    },
    setup() {
        const showCreditModal = ref(false);
        function openCreditModal() {
            showCreditModal.value = true;
        }
        function closeCreditModal() {
            showCreditModal.value = false;
        }
        return { showCreditModal, openCreditModal, closeCreditModal };
    }
});
</script>

<template>
    <PublicLayout>
        <Hero />
        <Features @open-credit-modal="openCreditModal" />
        <Info />
        <Partners />
        <Services />
        <CTA />
        <Footer />
        <div v-if="showCreditModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <button @click="closeCreditModal" class="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl">&times;</button>
                <CreditSimulator />
            </div>
        </div>
    </PublicLayout>
</template>