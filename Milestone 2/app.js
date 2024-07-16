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

// Function to populate the menu on page load
function populateMenu() {
    const tableBody = document.getElementById('menuTable');
    tableBody.innerHTML = ''; // Clear existing table content

    // Iterate through menuItems array and append rows to the table
    menuItems.forEach(item => {
        const discount = item.discount !== '-' ? `${item.discount}` : '-';
        tableBody.insertAdjacentHTML('beforeend',
            `<tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${discount}</td>
            </tr>`
        );
    });
}

// Function to handle form submission for adding a new item
function handleAddItemFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const itemCode = document.getElementById('itemCode').value.trim();
    const itemName = document.getElementById('itemName').value.trim();
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemDiscount = document.getElementById('itemDiscount').value.trim();

    // Validate input
    if (!itemCode || !itemName || isNaN(itemPrice)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // Create new item object
    const newItem = {
        code: itemCode,
        name: itemName,
        price: itemPrice,
        discount: itemDiscount === '' ? '-' : `${itemDiscount}%`
    };

    // Add new item to menuItems array
    menuItems.push(newItem);

    // Clear form fields
    document.getElementById('addItemForm').reset();

    // Update the menu display
    populateMenu();
}

// Function to handle order submission
function handleOrderSubmission(event) {
    event.preventDefault();

    // Get customer details
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();

    // Validate customer details
    if (!customerName || !customerPhone) {
        alert('Please enter customer name and phone number.');
        return;
    }

    // Create new order object
    const order = {
        orderID: generateOrderID(), // Generate a unique order ID (you can implement this function)
        customer: {
            name: customerName,
            phone: customerPhone
        },
        items: cartItems,
        orderTotal: calculateOrderTotal(),
        orderDiscount: parseFloat(document.getElementById('orderDiscount').value) || 0,
        orderDate: new Date().toLocaleString() // Store order date/time
    };

    // Clear cartItems array after order submission
    cartItems = [];

    // Add order to orders array (if you're storing orders in memory)
    orders.push(order);

    // Display a confirmation message or update UI as needed
    alert('Order placed successfully!');

    // Optionally, generate PDF receipt
    generatePDFReceipt(order);

    // Clear form fields and update UI
    document.getElementById('orderForm').reset();
    updateCartDisplay();
}

// Function to generate a PDF receipt for an order
function generatePDFReceipt(order) {
    // Example code using jsPDF library (include jsPDF in your project)
    const doc = new jsPDF();

    // Header
    doc.text('MOS Burgers Receipt', 20, 20);
    doc.text(`Order ID: ${order.orderID}`, 20, 30);
    doc.text(`Date: ${order.orderDate}`, 20, 40);
    doc.text(`Customer Name: ${order.customer.name}`, 20, 50);
    doc.text(`Customer Phone: ${order.customer.phone}`, 20, 60);

    // Items
    let y = 70;
    order.items.forEach((item, index) => {
        const itemString = `${item.name} - ${item.quantity} x ${item.price.toFixed(2)} LKR`;
        doc.text(itemString, 20, y);
        y += 10;
    });

    // Total
    doc.text(`Order Total: ${order.orderTotal.toFixed(2)} LKR`, 20, y + 10);

    // Save PDF
    doc.save(`receipt_${order.orderID}.pdf`);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Populate menu initially
    populateMenu();

    // Add event listener for addItemForm submission
    document.getElementById('addItemForm').addEventListener('submit', handleAddItemFormSubmit);

    // Add event listener for orderForm submission
    document.getElementById('orderForm').addEventListener('submit', handleOrderSubmission);
});

// Utility functions (example)
function calculateOrderTotal() {
    // Implement logic to calculate order total based on cartItems
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

function updateCartDisplay() {
    // Implement logic to update the UI to display cart items
    // This function can update the cart display in the UI
}

// Define global variables for customer and bill details
let customerDetails = {
    name: '',
    email: '',
    phone: ''
};

let billItems = []; // Array to store items in the bill

// Function to handle adding an item to the bill
function handleAddItemToBill(event) {
    event.preventDefault();

    // Get item code entered by the user
    const itemCode = document.getElementById('itemCode').value.trim();

    // Find the item in menuItems based on item code
    const selectedItem = menuItems.find(item => item.code === itemCode);

    if (!selectedItem) {
        alert('Item not found. Please enter a valid item code.');
        return;
    }

    // Add the selected item to the billItems array
    billItems.push(selectedItem);

    // Clear the item code input field
    document.getElementById('itemCode').value = '';

    // Update the display of items in the bill (optional step)
    updateBillDisplay();

    // Calculate and display invoice totals
    calculateAndDisplayInvoice();
}

// Function to update the display of items in the bill (optional step)
function updateBillDisplay() {
    // Implement UI update to display items in the bill (if needed)
}

// Function to calculate and display invoice totals
function calculateAndDisplayInvoice() {
    // Calculate subtotal, discount, and total based on billItems array
    let subtotal = 0;
    let totalDiscount = 0;

    billItems.forEach(item => {
        subtotal += item.price;
        if (item.discount !== '-') {
            // Calculate discount amount
            const discountPercent = parseFloat(item.discount.replace('%', ''));
            totalDiscount += (item.price * discountPercent) / 100;
        }
    });

    const total = subtotal - totalDiscount;

    // Display invoice totals in the UI (replace this with your own UI update logic)
    document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
    document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
    document.getElementById('totalDisplay').innerText = total.toFixed(2);
}

// Function to generate a PDF invoice and send it to customer's email
function generateAndSendInvoice() {
    // Generate PDF using jsPDF library
    const doc = new jsPDF();
    // Customize and create the invoice layout
    // Example:
    doc.text(`Invoice for ${customerDetails.name}`, 20, 20);
    // Add items and totals to the PDF
    doc.save(`invoice_${customerDetails.name}.pdf`);

    // Send the PDF invoice to customer's email (implement email sending logic)
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listener for adding item to bill
    document.getElementById('addItemToBillForm').addEventListener('submit', handleAddItemToBill);
});



// Function to populate the menu on page load
function populateMenu() {
    const tableBody = document.getElementById('menuTable');
    tableBody.innerHTML = ''; // Clear existing table content

    // Iterate through menuItems array and append rows to the table
    menuItems.forEach(item => {
        const discount = item.discount !== '-' ? `${item.discount}` : '-';
        tableBody.insertAdjacentHTML('beforeend',
            `<tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${discount}</td>
            </tr>`
        );
    });
}

// Function to handle adding an item to the bill
function handleAddItemToBill(event) {
    event.preventDefault();

    // Get item code entered by the user
    const itemCode = document.getElementById('billItemCode').value.trim();

    // Find the item in menuItems based on item code
    const selectedItem = menuItems.find(item => item.code === itemCode);

    if (!selectedItem) {
        alert('Item not found. Please enter a valid item code.');
        return;
    }

    // Add the selected item to the billItems array
    billItems.push(selectedItem);

    // Clear the item code input field
    document.getElementById('billItemCode').value = '';

    // Update the display of items in the bill (optional step)
    updateBillDisplay();

    // Calculate and display invoice totals
    calculateAndDisplayInvoice();
}

// Function to update the display of items in the bill (optional step)
function updateBillDisplay() {
    // Implement UI update to display items in the bill (if needed)
}

// Function to calculate and display invoice totals
function calculateAndDisplayInvoice() {
    // Calculate subtotal, discount, and total based on billItems array
    let subtotal = 0;
    let totalDiscount = 0;

    billItems.forEach(item => {
        subtotal += item.price;
        if (item.discount !== '-') {
            // Calculate discount amount
            const discountPercent = parseFloat(item.discount.replace('%', ''));
            totalDiscount += (item.price * discountPercent) / 100;
        }
    });

    const total = subtotal - totalDiscount;

    // Display invoice totals in the UI (replace this with your own UI update logic)
    document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
    document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
    document.getElementById('totalDisplay').innerText = total.toFixed(2);
}

// Function to generate a PDF invoice and send it to customer's email
function generateAndSendInvoice() {
    // Generate PDF using jsPDF library
    const doc = new jsPDF();
    // Customize and create the invoice layout
    // Example:
    doc.text(`Invoice for ${customerDetails.name}`, 20, 20);
    // Add items and totals to the PDF
    doc.save(`invoice_${customerDetails.name}.pdf`);

    // Send the PDF invoice to customer's email (implement email sending logic)
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Populate menu initially
    populateMenu();

    // Add event listener for adding item to bill
    document.getElementById('addItemToBillForm').addEventListener('submit', handleAddItemToBill);
});
// Define global variable to store items in the bill


// Function to handle adding an item to the bill
function addItemToBill() {
    // Get item code entered by the user
    const itemCode = document.getElementById('billItemCode').value.trim();

    // Find the item in menuItems based on item code
    const selectedItem = menuItems.find(item => item.code === itemCode);

    if (!selectedItem) {
        alert('Item not found. Please enter a valid item code.');
        return;
    }

    // Add the selected item to the billItems array
    billItems.push(selectedItem);

    // Clear the item code input field
    document.getElementById('billItemCode').value = '';

    // Update the display of items in the bill
    updateBillDisplay();

    // Calculate and display invoice totals
    calculateAndDisplayInvoice();
}

// Function to update the display of items in the bill
function updateBillDisplay() {
    const tableBody = document.getElementById('billItemsTable');
    tableBody.innerHTML = ''; // Clear existing table content

    // Iterate through billItems array and append rows to the table
    billItems.forEach(item => {
        const discount = item.discount !== '-' ? item.discount : '0%';
        tableBody.insertAdjacentHTML('beforeend',
            `<tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${discount}</td>
                <td><button type="button" class="btn btn-danger btn-sm" onclick="removeItem('${item.code}')">Remove</button></td>
            </tr>`
        );
    });
}

// Function to remove an item from the billItems array
function removeItem(itemCode) {
    billItems = billItems.filter(item => item.code !== itemCode);
    updateBillDisplay();
    calculateAndDisplayInvoice();
}

// Function to calculate and display invoice totals
function calculateAndDisplayInvoice() {
    // Calculate subtotal, discount, and total based on billItems array
    let subtotal = 0;
    let totalDiscount = 0;

    billItems.forEach(item => {
        subtotal += item.price;
        if (item.discount !== '-') {
            // Calculate discount amount
            const discountPercent = parseFloat(item.discount.replace('%', ''));
            totalDiscount += (item.price * discountPercent) / 100;
        }
    });

    const total = subtotal - totalDiscount;

    // Display invoice totals in the UI (replace this with your own UI update logic)
    document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
    document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
    document.getElementById('totalDisplay').innerText = total.toFixed(2);
}

// Function to generate a PDF invoice and send it to customer's email
function generateAndSendInvoice() {
    // Generate PDF using jsPDF library (implement logic here)
    // Example:
    const doc = new jsPDF();
    doc.text('Invoice', 20, 20);
    doc.save('invoice.pdf');
}

// Event listener for item code input to update item details
document.getElementById('billItemCode').addEventListener('input', function() {
    const itemCode = this.value.trim();
    const selectedItem = menuItems.find(item => item.code === itemCode);

    if (selectedItem) {
        document.getElementById('billItemName').value = selectedItem.name;
        document.getElementById('billItemPrice').value = selectedItem.price.toFixed(2);
        document.getElementById('billItemDiscount').value = selectedItem.discount !== '-' ? selectedItem.discount : '0%';
    } else {
        document.getElementById('billItemName').value = '';
        document.getElementById('billItemPrice').value = '';
        document.getElementById('billItemDiscount').value = '';
    }
});
// Define global variable to store items in the bill


// Function to handle adding an item to the bill
function addItemToBill() {
    // Get item code entered by the user
    const itemCode = document.getElementById('billItemCode').value.trim();

    // Find the item in menuItems based on item code
    const selectedItem = menuItems.find(item => item.code === itemCode);

    if (!selectedItem) {
        alert('Item not found. Please enter a valid item code.');
        return;
    }

    // Add the selected item to the billItems array
    billItems.push(selectedItem);

    // Clear the item code input field
    document.getElementById('billItemCode').value = '';

    // Update the display of items in the bill
    updateBillDisplay();

    // Calculate and display invoice totals
    calculateAndDisplayInvoice();
}

// Function to update the display of items in the bill
function updateBillDisplay() {
    const tableBody = document.getElementById('billItemsTable');
    tableBody.innerHTML = ''; // Clear existing table content

    // Iterate through billItems array and append rows to the table
    billItems.forEach(item => {
        const discount = item.discount !== '-' ? item.discount : '0%';
        tableBody.insertAdjacentHTML('beforeend',
            `<tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>1</td> <!-- Assuming quantity is 1 per item -->
                <td>${discount}</td>
            </tr>`
        );
    });
}

// Function to calculate and display invoice totals
function calculateAndDisplayInvoice() {
    // Calculate subtotal, discount, and total based on billItems array
    let subtotal = 0;
    let totalDiscount = 0;

    billItems.forEach(item => {
        subtotal += item.price;
        if (item.discount !== '-') {
            // Calculate discount amount
            const discountPercent = parseFloat(item.discount.replace('%', ''));
            totalDiscount += (item.price * discountPercent) / 100;
        }
    });

    const total = subtotal - totalDiscount;

    // Display invoice totals in the UI
    document.getElementById('subtotalDisplay').innerText = subtotal.toFixed(2);
    document.getElementById('totalDiscountDisplay').innerText = totalDiscount.toFixed(2);
    document.getElementById('totalDisplay').innerText = total.toFixed(2);
}

// Function to generate and display the bill in an alert
function displayBill() {
    let billContent = '';

    // Prepare bill content
    billContent += '===========================\n';
    billContent += '        MOS Burgers         \n';
    billContent += '===========================\n\n';

    billItems.forEach(item => {
        const discount = item.discount !== '-' ? item.discount : '0%';
        billContent += `${item.name}\n`;
        billContent += `Price: ${item.price.toFixed(2)} LKR\n`;
        billContent += `Discount: ${discount}\n`;
        billContent += '\n';
    });

    billContent += '===========================\n';
    billContent += `Subtotal: ${document.getElementById('subtotalDisplay').innerText}\n`;
    billContent += `Total Discount: ${document.getElementById('totalDiscountDisplay').innerText}\n`;
    billContent += `Total: ${document.getElementById('totalDisplay').innerText}\n\n`;
    billContent += '===========================\n';
    billContent += '       Thank You!         \n';
    billContent += '===========================\n';

    // Display bill in an alert
    alert(billContent);
}

// Function to generate a PDF invoice and send it to customer's email
function generateAndSendInvoice() {
    // Generate PDF using jsPDF library (implement logic here)
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text('MOS Burgers Invoice', 20, 20);

    // Body
    let startY = 30;
    billItems.forEach((item, index) => {
        const discount = item.discount !== '-' ? item.discount : '0%';
        const itemString = `${item.name} - ${item.price.toFixed(2)} LKR - Discount: ${discount}`;
        doc.text(itemString, 20, startY + index * 10);
    });

    // Footer
    const subtotal = document.getElementById('subtotalDisplay').innerText;
    const totalDiscount = document.getElementById('totalDiscountDisplay').innerText;
    const total = document.getElementById('totalDisplay').innerText;

    doc.text(`Subtotal: ${subtotal} LKR`, 20, startY + (billItems.length + 1) * 10);
    doc.text(`Total Discount: ${totalDiscount} LKR`, 20, startY + (billItems.length + 2) * 10);
    doc.text(`Total: ${total} LKR`, 20, startY + (billItems.length + 3) * 10);

    // Save PDF
    doc.save('invoice.pdf');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for Print Bill button
    document.getElementById('displayBill').addEventListener('click', displayBill);
});
