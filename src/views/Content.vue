<template>
  <section id="content">
    <member-center></member-center>
  </section>
</template>

<script>
import MemberCenter from "@/views/MemberCenter";
export default {
  name: "Content",
  components: { MemberCenter }
};
</script>

<style scoped>
#content {
  height: 100%;
  width: 100vw;
}
</style>
