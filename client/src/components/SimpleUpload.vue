<template>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">

        <div v-if="message"
            :class="`message ${error ? 'is-danger' : 'is-success'}`"
            >
            <div class="message-body">
                {{message}}
            </div>
        </div>
  
        <div class="field">
            <div class="file is-boxed is-primary">
                
                <label class="file-label">

                    <input
                    type="file"
                    ref="file"
                    @change="selectFile"
                    class="file-input"
                    />

                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload">
                            </i>
                        </span>

                    </span>
                </label>
            </div>
        </div>
        <div>Enter object name: </div>  
        <input type="text" v-model="fileName"/>
        <div class="field">
            <button class="button is-info" @click="addFileToList">
                Send
            </button>
        </div>
         <ul>
            <li v-for="file in uploadedFiles" :key="file">
                {{ file }} 
                <button>Add To Scene</button>
                </li>
        </ul>
    </form>
     
</template>

<script>
import axios from 'axios';
export default {
   name: "SimpleUpload",

   data() {
    return {
        file: "",
        message: "",
        error: false,
        fileName: '',
        uploadedFiles: [],
    }
   },

   methods: {
    selectFile() {
        this.file = this.$refs.file.files[0];
        this.error = false;
        this.message = "";
    },
    addFileToList() {
        this.uploadedFiles.push(this.fileName);
        this.fileName = '';   
    },

    // PUSHING THE UPLOADED FILE TO BACKEND
    async sendFile() {
        const formData = new FormData();
        formData.append('file', this.file);

        try {
            await axios.post('/api/upload', formData);
            this.message = "File has been uploaded";
            this.file = "";
            this.error = false;
        } catch (err) {
            console.log(err);
            this.message = err.response.data.error;
            this.error = true;
        }
    }
   }
}

</script>
