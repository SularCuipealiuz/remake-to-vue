<template>
  <section id="content">
    <!--    <member-center></member-center>-->
    <real-man></real-man>
  </section>
</template>

<script>
// import MemberCenter from "@/views/MemberCenter";
import RealMan from "@/components/RealMan";
export default {
  name: "Content",
  components: { RealMan }
};
</script>

<style scoped>
#content {
  height: 100%;
  width: 100vw;
}
</style>
