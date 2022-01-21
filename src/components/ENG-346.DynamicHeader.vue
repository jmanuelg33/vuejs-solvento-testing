<template>
  <div>
    <p>Description meta: {{ description }}</p>
    <button @click="changeTitle">changeTitle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      title: "Titulo default",
      description: "A blog post about some stuff",
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
          { name: 'application-name', content: this.description },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.0.min.js",
          async: true,
          defer: true,
        },
      ],
      noscript: [{ innerHTML: "This website requires JavaScript." }],
    };
  },

  methods: {
    changeTitle: function () {
      this.title = `Titulo-${++this.n}`;
      setTimeout(() => {
        this.title = "asdasdasd";
      }, 3000);

      // ver documentacion hay metodos como this.$meta().refresh(); .pause(),
    },
  },
};
</script>