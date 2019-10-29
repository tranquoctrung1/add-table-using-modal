// define variables to use
var click = document.getElementById('click');
var modal = document.getElementById('modal');
var close = document.getElementById('close');
var body  = document.getElementById('body');
var update = document.getElementById('update');
var cancel = document.getElementById('cancel');
var idProduct = document.getElementById('idProduct');
var nameProduct = document.getElementById('nameProduct');
var priceProduct = document.getElementById('priceProduct');
var error_nameProduct = document.getElementById('error-nameProduct');
var error_priceProduct = document.getElementById('error-priceProduct');
var table = document.getElementById('table');
var tableBody = table.getElementsByTagName('tbody')[0];


// add event click for addProduct button 
click.addEventListener('click', () =>
{
    modal.classList.add('active');
    body.classList.add('active');
})

// add event click for X 
close.addEventListener('click', () =>
{
    modal.classList.remove('active');
    body.classList.remove('active');
})

// function random for idProduct and this function will return a number from 0 to 100
function random ()
{
    return Math.floor(Math.random() * 100); 
}

//call random and assign to idProduct's value
idProduct.value = random();

// add event blur for nameProduct input tag 
nameProduct.addEventListener('blur' ,() =>
{
    if(!nameProduct.value)
    {
        error_nameProduct.innerHTML = "Tên sản phẩm không được để trống!";
    }
    else{
        error_nameProduct.innerHTML = "";
    }
})

// add event blur for priceProduct input tag 
priceProduct.addEventListener('blur', () =>
{
    if(!priceProduct.value)
    {
        error_priceProduct.innerHTML = "Giá sản phẩm không được để trống!";
    }
    else
    {
        !parseInt(priceProduct) ? error_priceProduct.innerHTML = "Giá sản phẩm phải là số!" : error_priceProduct.innerHTML = "";
    }
})

// add event click for addProduct button from modal 
update.addEventListener('click', () =>
{
    if(!nameProduct.value)
    {
        error_nameProduct.innerHTML = "Tên sản phẩm không được để trống!";
    }
    if(nameProduct.value)
    {
        error_nameProduct.innerHTML = "";
    }
    if(!priceProduct.value)
    {
        error_priceProduct.innerHTML = "Giá sản phẩm không được để trống!";
    }
    if(priceProduct)
    {
        !parseInt(priceProduct) ? error_priceProduct.innerHTML = "Giá sản phẩm phải là số!" : error_priceProduct.innerHTML = "";
    }
    if(priceProduct && nameProduct.value)
    {
        var trNode = document.createElement('tr');

        for (let i = 1 ; i<= 4;i++)
        {
            var tdNode = document.createElement('td');
            let content;
            if(i === 1)
            {
                content = document.createTextNode(`${idProduct.value}`);
                tdNode.appendChild(content);
            }
            else if(i === 2)
            {
                tdNode.classList.add('name')
                content = document.createTextNode(`${nameProduct.value}`);
                tdNode.appendChild(content);
            }
            else if(i === 3)
            {
                content = document.createTextNode(`${priceProduct.value}`);
                tdNode.appendChild(content);
            }
            else
            {
                let button = document.createElement('button');
                button.classList.add('update-button');
                button.innerHTML = "Cập nhật";
                tdNode.appendChild(button);

                let button2 = document.createElement('button');
                button2.classList.add('delete-button')
                button2.innerHTML = "Xóa";
                tdNode.appendChild(button2);
            }
            
            trNode.appendChild(tdNode);
        }
  
        tableBody.appendChild(trNode);
        idProduct.value = random();
    }
})

// add event click for cancel button (close modal)
cancel.addEventListener('click', () =>
{
    modal.classList.remove('active');
    body.classList.remove('active');
})