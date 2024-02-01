import axios from  './api'

const ArticleServise = {
    async getArtiles() {
        const {data} = await axios.get('/articles')
        return data
    },
    async getArticleDetail(slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    }
   
}

export default ArticleServise