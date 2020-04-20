<template>
  <section id="content">
    <member-center v-show="false"></member-center>
    <real-man v-show="false"></real-man>
    <sport-game v-show="false"></sport-game>
  </section>
</template>

<script>
import SportGame from "@/components/SportGame";
import MemberCenter from "@/views/MemberCenter";
import RealMan from "@/components/RealMan";

export default {
  name: "Content",
  components: { RealMan, MemberCenter, SportGame }
};
</script>

<style scoped>
#content {
  height: 100%;
  width: 100vw;
  flex: auto;
}
</style>
