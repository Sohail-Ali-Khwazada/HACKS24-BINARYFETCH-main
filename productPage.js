const productArray = [["./IndividualProductPage.html","./ProductImages/Max_Protien_Protien_Bar_2.jpg","Max Protien Protien Bar","Max Protein Choco Berry protein bar is the perfect bar for your ultimate lifestyle with no preservatives and no artificial sweeteners with a balance of taste and health.What is gluten-free bread texture? The taste of these products is also different.Rating 9.7..."],
["./IndividualProductPage copy 2.html","./ProductImages/mainbread.jpg","Gluten Free Breads","This gluten free bread is soft, chewy open crumb and a deliciously crisp caramelised crust. These breads of made from different flours, such as rice or potato flour, and typically contain hydrocolloids like guar and xanthan gum.Rating: 4.9"],
["./IndividualProductPage copy.html","./ProductImages/buiscuit.jpg","Nutri Choice Buscuits","Britannia NutriChoice Digestive biscuits are high fibre biscuits packed with the richness of wheat flour and bran. With every bite, you experience a perfect tea-time partner.Contains high dietary fibre that aidsdigestive health. A healthy snacking option for anytime.Rating 8.8..."],
["./IndividualProductPage copy 3.html","./ProductImages/coke.jpg","Diet & Sugar Free Coke","It contains no added sugars since it uses artificial sweeteners instead. Regular Diet Coke uses aspartame.Rating 8.7...."],
["./IndividualProductPage copy 4.html","./ProductImages/jain.jpg","Jain & Iodine Free Namkeen","This is a Low-Iodine Diet, not a “No-Iodine Diet” or an “Iodine-Free Diet.” • The diet is for a short time period with Rating 7.8...."],
["./IndividualProductPage copy 5.html","./ProductImages/IceCreme.jpg","Lactose Free Ice Cream","The ice cream is a boon for those who are lactose intolerant. Why miss out on ice cream, just because of lactose intolerance? Rating: 3.9...."]
]

let searchbtn = document.getElementById("submittext")
let tempform = document.getElementById("tempform")
let container = document.getElementById("ProductCardContainer")
let filcards = ""
let inbox = ""
let newArray;
searchbtn.addEventListener("click",(e)=> {

    e.preventDefault()
    console.log
    inbox = document.getElementById("simple-search").value
    newArray = productArray.filter((val)=> {
        return !(val[3].includes(inbox))
    })
    newArray.forEach((elem)=> {
        filcards += `<div
        class="max-w-sm bg-white border border-gray-000 rounded-lg shadow dark:bg-gray-800 dark:border-gray-000 ProductCard">
        <div class="productImgDiv">
          <a href="${elem[0]}">
            <img class="rounded-t-lg productImg border border-gray-000"
              src="${elem[1]}" alt="ProductImg" />
          </a>
        </div>
        <div class="p-5">
          <a href="./IndividualProductPage.html">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${elem[2]}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${elem[3]}
          </p>
          <a href="./IndividualProductPage.html"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>`
    })
    container.innerHTML = filcards
    console.log(newArray)

})

// tempform.addEventListener("submit",(e)=> {
//     e.preventDefault()
//     inbox = document.getElementById("simple-search").value
//     newArray = productArray.filter((val)=> {
//         return !(val[4].contains(inbox))
//     })
//     console.log(newArray)

// })