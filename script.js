// // let datafrom = document.querySelector('form')
// // let inputfrom = document.querySelector('#inputdata')
// // let ul = document.querySelector('ul')
// // datafrom.addEventListener('submit', (e) => {
// //     e.preventDefault()
// //     let newdata = inputfrom.value
// //     let newele = document.createElement('li')
// //     newele.innerText = newdata
// //     ul.appendChild(newele)
// //     console.log(inputfrom.value)
// //     console.log("form submitted")
// //     inputfrom.value = ""
// // })
// // let h1 = document.querySelector('h1')
// // inputfrom.addEventListener('input', () => {
// //     console.log(inputfrom.value)
// //     h1.innerText = inputfrom.value
// // })
// // let p = new Promise((resolve, reject) => {
// //     let a = 1 + 3
// //     if (a == 2) {
// //         resolve('success')
// //     } else {
// //         reject("rejected bro")
// //     }
// // })
// // p.then((mes) => {
// //     console.log(mes)
// // }).catch((mes) => {
// //     console.log(mes)
// // })
// // async function hello() {
// //     let p = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve("pink")
// //         }, 5000)
// //     })
// //     document.body.style.backgroundColor = await p
// // }
// // hello()
// // const login = async (username, password) => {
// //     username = prompt("Enter the user name:")
// //     password = prompt("Enter the password:")
// //     if (!username || !password) throw 'invalid credentails';
// //     if (password === 'laique' || password === 'babu') return 'welcome';
// //     throw 'invalid password';
// // }
// // login()
// //     .then((msg) => {
// //         console.log(msg);
// //         console.log('Logged In');
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //         console.log('Error he');
// //     })
// // let p1 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('done')
// //         resolve(1)
// //     }, 2000)
// // })
// // let p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('done')
// //         resolve(2)
// //     }, 4000)
// // })
// // let p3 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('done')
// //         resolve(3)
// //     }, 6000)
// // })
// // let p4 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('done')
// //         resolve(4)
// //     }, 7000)
// // })
// // let all_p = Promise.allSettled([p1, p2, p3, p4])
// // all_p.then((value) => {
// //     console.log(value)
// // })
// async function laique() {
//     let bangloreW = new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("27 deg")
//         }, 3000)
//     })
//     let chennaiW = new Promise((reslove, reject) => {
//         setTimeout(() => {
//             reslove("33 deg")
//         }, 7000)
//     })
//     console.log('please wait were are feteching wheather from our server')

//     let bw = await bangloreW
//     console.log("The fetched data are.....")
//     console.log(bw)
//     console.log('please wait were are feteching wheather from our server')
//     let cw = await chennaiW
//     console.log("The fetched data are.....")
//     console.log(cw)
//     return [bw, cw]

// }
// // laique().then((value) => {
// //     console.log(value)
// // })
// async function babu() {
//     console.log("eh")
// }
// async function mains() {
//     await laique()
//     await babu()
// }
// mains()
// const url = 'https://api.cryptonator.com/api/btc-usd/ticker';

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data.ticker));

let p = document.querySelector('p')
async function la() {

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${cname.value}&fname=${yname.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68f490eed2msh461b3d9a914b236p1ab051jsn476067085d98',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        p.innerText = result
        let a = JSON.parse(result)
        console.log(a.percentage)
    } catch (error) {
        console.error(error);
    }

}
// console.log(result)
let form = document.querySelector('form')
let yname = document.querySelector('#yname')
let cname = document.querySelector('#cname')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    la()
})