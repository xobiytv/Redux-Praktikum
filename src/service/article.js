import axios from  './api'

const ArticleServise = {
    async getArtiles() {
        const {data} = await axios.get('/articles')
        return data
    },
   
}

export default ArticleServise