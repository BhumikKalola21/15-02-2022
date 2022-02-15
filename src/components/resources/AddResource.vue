<template>
  <base-dialogue v-if="inputisInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Oops.....Atleast one charcter input value is not valid</p>
      <p>
        please check your all input and make sure you entered at least one
        character.
      </p>
    </template>
    <template #header> </template>
    <template #action>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialogue>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">title</label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <base-button type="submit">Add your data</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputisInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const entereddesc = this.$refs.descInput.value;
      const enteredurl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        entereddesc.trim() === '' ||
        enteredurl.trim() === ''
      ) {
        this.inputisInvalid = true;
        return;
      }
      this.addResource(enteredTitle, entereddesc, enteredurl);
    },
    confirmError() {
      this.inputisInvalid = false;
    },
    
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
