const axios =require('axios')
export function homenet(config){
        const axiosfun= axios.create({
            baseURL:"http://121.37.243.6",
            timeout:5000
        })
      return  axiosfun(config)
}