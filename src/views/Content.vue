<template>
  <section id="content">
    <!--    <member-center></member-center>-->
    <sport-game></sport-game>
  </section>
</template>

<script>
// import MemberCenter from "@/views/MemberCenter";
import SportGame from "@/components/SportGame";
export default {
  name: "Content",
  components: { SportGame }
};
</script>

<style scoped>
#content {
  height: 100%;
  width: 100vw;
}
</style>
