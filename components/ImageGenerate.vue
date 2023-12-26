<template>
    <v-app>
        <v-app-bar>Image Generate</v-app-bar>
        <v-main>
            <v-text-field v-model="prompt"></v-text-field>
            <v-btn v-on:click="submitClicked">Submit</v-btn>
            <v-img v-bind:src="url"></v-img>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const prompt = ref("")
const url = ref("")

const submitClicked = () => {
    console.log(`submit clicked ${prompt.value}`)
    const { data, error, status } = useFetch("/api/image", {
        method: "POST",
        body: { prompt: prompt.value },
    })
    console.log(`data ${data.value.url}`)
    console.log(`error ${error.value}`)
    console.log(`status ${status.value}`)
    url.value = data.value.url
}

// const { data, error, status } = useLazyFetch("/api/image", {
//     method: "POST",
//     body: { prompt: prompt.value },
//     immediate: false,
//     watch: [prompt],
// })
</script>