<template>
  <section>
    <div>
      <label for="">{{$t('account')}}</label>
      <input type="text" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Registered"
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
