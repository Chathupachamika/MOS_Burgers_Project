// Global variables to store data
let menuItems = [
    { code: 'B1001', name: 'Classic Burger (Large)', price: 750.00, discount: '-' },
    { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500.00, discount: '15%' },
    { code: 'B1003', name: 'Turkey Burger', price: 1600.00, discount: '-' },
    { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400.00, discount: '-' },
    { code: 'B1005', name: 'Chicken Burger (Regular)', price: 800.00, discount: '20%' },
    { code: 'B1006', name: 'Cheese Burger (Large)', price: 1000.00, discount: '-' },
    { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600.00, discount: '-' },
    { code: 'B1008', name: 'Bacon Burger', price: 650.00, discount: '15%' },
    { code: 'B1009', name: 'Shawarma Burger', price: 800.00, discount: '-' },
    { code: 'B1010', name: 'Olive Burger', price: 1800.00, discount: '-' },
    { code: 'B1012', name: 'Double-Cheese Burger', price: 1250.00, discount: '20%' },
    { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200.00, discount: '-' },
    { code: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600.00, discount: '10%' },
    { code: 'B1015', name: 'Paneer Burger', price: 900.00, discount: '-' },
    // Submarines
    { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000.00, discount: '-' },
    { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500.00, discount: '-' },
    { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800.00, discount: '3%' },
    { code: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400.00, discount: '-' },
    { code: 'B1020', name: 'Grinder Submarine', price: 2300.00, discount: '-' },
    { code: 'B1021', name: 'Cheese Submarine', price: 2200.00, discount: '-' },
    { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900.00, discount: '16%' },
    { code: 'B1023', name: 'Special Horgie Submarine', price: 2800.00, discount: '-' },
    { code: 'B1024', name: 'MOS Special Submarine', price: 3000.00, discount: '-' },
    // Fries
    { code: 'B1025', name: 'Steak Fries (Large)', price: 1200.00, discount: '-' },
    { code: 'B1026', name: 'Steak Fries (Medium)', price: 600.00, discount: '-' },
    { code: 'B1027', name: 'French Fries (Large)', price: 800.00, discount: '-' },
    { code: 'B1028', name: 'French Fries (Medium)', price: 650.00, discount: '-' },
    { code: 'B1029', name: 'French Fries (Small)', price: 450.00, discount: '-' },
    { code: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600.00, discount: '-' },
    // Pasta
    { code: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600.00, discount: '15%' },
    { code: 'B1032', name: 'Chicken Penne Pasta', price: 1700.00, discount: '-' },
    { code: 'B1033', name: 'Ground Turkey Pasta Bake', price: 2900.00, discount: '10%' },
    { code: 'B1034', name: 'Creamy Shrimp Pasta', price: 2000.00, discount: '-' },
    { code: 'B1035', name: 'Lemon Butter Pasta', price: 1950.00, discount: '-' },
    { code: 'B1036', name: 'Tagliatelle Pasta', price: 2400.00, discount: '1%' },
    { code: 'B1037', name: 'Baked Ravioli', price: 2000.00, discount: '1%' },
    // Chicken
    { code: 'B1038', name: 'Fried Chicken (Small)', price: 1200.00, discount: '-' },
    { code: 'B1039', name: 'Fried Chicken (Regular)', price: 2300.00, discount: '10%' },
    { code: 'B1040', name: 'Fried Chicken (Large)', price: 3100.00, discount: '5%' },
    { code: 'B1041', name: 'Hot Wings (Large)', price: 2400.00, discount: '-' },
    { code: 'B1042', name: 'Devilled Chicken (Large)', price: 900.00, discount: '-' },
    { code: 'B1043', name: 'BBQ Chicken (Regular)', price: 2100.00, discount: '-' },
    // Beverages
    { code: 'B1044', name: 'Pepsi (330ml)', price: 990.00, discount: '5%' },
    { code: 'B1045', name: 'Coca-Cola (330ml)', price: 1230.00, discount: '-' },
    { code: 'B1046', name: 'Sprite (330ml)', price: 1500.00, discount: '3%' },
    { code: 'B1047', name: 'Mirinda (330ml)', price: 850.00, discount: '7%' }
];
// Store customer details
let customerDetails = {};

// Store bill items
let billItems = [];

// Function to add item to bill
function addItemToBill() {
    const itemCode = document.getElementById('billItemCode').value;
    const itemQty = parseInt(document.getElementById('billItemQty').value);

    const menuItem = menuItems.find(item => item.code === itemCode);

    if (menuItem && itemQty > 0) {
        // Check if item is already in bill
        const existingItem = billItems.find(item => item.code === itemCode);
        if (existingItem) {
            existingItem.qty += itemQty;
        } else {
            billItems.push({
                ...menuItem,
                qty: itemQty
            });
        }

        // Update bill summary table
        updateBillSummary();
    } else {
        alert('Invalid item code or quantity.');
    }
}

// Function to remove item from bill
function removeItem() {
    const itemCode = document.getElementById('billItemCode').value;
    billItems = billItems.filter(item => item.code !== itemCode);

    // Update bill summary table
    updateBillSummary();
}

// Function to update bill summary table
function updateBillSummary() {
    const billItemsTable = document.getElementById('billItemsTable');
    billItemsTable.innerHTML = '';

    let subtotal = 0;
    let totalDiscount = 0;

    billItems.forEach(item => {
        const itemTotal = item.price * item.qty;
        let itemDiscount = 0;
        
        if (item.discount !== '-') {
            const discountPercent = parseFloat(item.discount.replace('%', ''));
            itemDiscount = (itemTotal * discountPercent) / 100;
        }

        subtotal += itemTotal;
        totalDiscount += itemDiscount;

        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.qty}</td>
            <td>${item.discount}</td>
              </tr>`;
        billItemsTable.innerHTML += row;
    });

    const total = subtotal - totalDiscount;

    document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
    document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
    document.getElementById('totalDisplay').innerText = total.toFixed(2);
}

// Adjust the removeItem function to accept the item code and remove the correct item
function removeItem(itemCode) {
    billItems = billItems.filter(item => item.code !== itemCode);
    updateBillSummary();
}

// Function to handle Print Bill button click
document.getElementById('displayBill').addEventListener('click', () => {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;

    if (!customerName || !customerEmail || !customerPhone) {
        alert('Please enter all customer details.');
        return;
    }

    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    let billDetails = `Customer Name: ${customerName}\nEmail: ${customerEmail}\nPhone: ${customerPhone}\nDate: ${formattedDate}\n\n`;
    billDetails += `Items:\n`;
    billItems.forEach(item => {
        billDetails += `${item.name} - ${item.price} LKR x ${item.qty} (${item.discount})\n`;
    });

    const subtotal = parseFloat(document.getElementById('subtotalDisplay').innerText);
    const totalDiscount = parseFloat(document.getElementById('totalDiscountDisplay').innerText);
    const total = parseFloat(document.getElementById('totalDisplay').innerText);

    billDetails += `\nSubtotal: ${subtotal} LKR\nTotal Discount: ${totalDiscount} LKR\nTotal: ${total} LKR\n\n`;
    billDetails += 'Thank you, come again!\nCall us: 0912343564\nEmail: mosburgers@gmail.com';

    alert(billDetails);
});

// Populate menu table on page load
document.addEventListener('DOMContentLoaded', () => {
    const menuTable = document.getElementById('menuTable');
    menuItems.forEach(item => {
        const row = `<tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${item.discount}</td>
        </tr>`;
        menuTable.innerHTML += row;
    });
});

// Event listener to autofill item details based on item code
document.getElementById('billItemCode').addEventListener('input', () => {
    const itemCode = document.getElementById('billItemCode').value;
    const menuItem = menuItems.find(item => item.code === itemCode);

    if (menuItem) {
        document.getElementById('billItemName').value = menuItem.name;
        document.getElementById('billItemPrice').value = menuItem.price.toFixed(2);
        document.getElementById('billItemDiscount').value = menuItem.discount;
    } else {
        document.getElementById('billItemName').value = '';
        document.getElementById('billItemPrice').value = '';
        document.getElementById('billItemDiscount').value = '';
    }
});