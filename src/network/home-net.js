import {homenet} from './index.js'

export function main_right(){
    return homenet({
        url:'index.php/index/index',
        method:'post'
    })
}

export function main_left(){
    return homenet({
        url:'/index.php/index/index/art?cid=5',
        method:'post'
    })
}

export function main_left_col(){
    return homenet({
        url:'/index.php/index/index/col',
        method:'post'
    })
}

export function mdd_month(monthNum){
    return homenet({
        url:'/index.php/index/region/month',
        method:'post',
        params:{
            pid:monthNum
        }
    })
}

export function mdd_ztImg(monthNum){
    return homenet({
        url:'/index.php/index/region/mon',
        method:'post',
        params:{
            pid:monthNum
        }
    })
}
