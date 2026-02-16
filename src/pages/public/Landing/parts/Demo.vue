<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './Hero.vue';
import Features from './Features.vue';
import Info from './Info.vue';
import Partners from './Partners.vue';
import Services from './Services.vue';
import CTA from './CTA.vue';
import Footer from './Footer.vue';
import PublicLayout from './PublicLayout.vue';

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
        PublicLayout
    }
});
</script>

<template>
    <PublicLayout>
        <Hero />
        <Features />
        <Info />
        <Partners />
        <Services />
        <CTA />
        <Footer />
    </PublicLayout>
</template>