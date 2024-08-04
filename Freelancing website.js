const users = {                                         
    client: {
        username: 'Tariq Raheem',
        password: 'Tariq123',
        type: 'client',
        gigs: [
            { description: 'Front End Developer Web Application', price: 5000 },
            { description: 'Dynamic Websites', price: 600 }
        ]
    },
    user: {
        username: 'Rehmat Ullah',
        password: 'Rehmat123',
        type: 'user',
        projects: [
            'E-commerce Website',
            'Portfolio Website',
            'Blog Website',
            'Social Media App', 
            'Task Management App',
            'Real Estate Website',
            'Restaurant Website',
            'Online Learning Platform',
            'Photography Website',
            'Travel Booking Website'
        ]
    }
};

// Function to authenticate user
function authenticateUser() {
    let username = prompt('Enter your username:');
    let password = prompt('Enter your password:');
    
    for (let key in users) {
        if (users[key].username === username && users[key].password === password) {
            alert('Login successfully!');
            return users[key];
        }
    }

    alert('Invalid username or password.');
    let forgotPassword = confirm('Did you forget your password?');
    if (forgotPassword) {
        return resetPassword(username);
    }
    return authenticateUser();
}

// Function to reset password
function resetPassword(username) {
    for (let key in users) {
        if (users[key].username === username) {
            let newPassword = prompt('Enter your new password:');
            users[key].password = newPassword;
            alert('Password reset successfully!');
            return authenticateUser();
        }
    }
    
    alert('Username not found.');
    return authenticateUser();
}

// Start authentication
const currentUser = authenticateUser();

// Client and user interaction
if (currentUser.type === 'user') {
    alert('Welcome, User! Here are some projects for you:');
    currentUser.projects.forEach((project, index) => alert(`${index + 1}. ${project}`));

    let selectedProjectIndex = parseInt(prompt('  "portfolio website"    Select a project by number:')) - 1;
    let projectDescription = currentUser.projects[selectedProjectIndex];

    alert(`Client: ${projectDescription}`);
    alert('User: I can make this.');

    let days = prompt('Client: How many days do you need for this project?');
    alert(`User: I need ${days} days.`);
    alert('Client: Ok, let’s proceed.');

    setTimeout(() => {
        alert('7 days have passed...');
        alert('User: The project is completed. Please review.');
        let review = prompt('Client: Review the project:');
        alert(`Client: ${review}`);
        alert('Client: What is your payment method?');
        let paymentMethod = prompt('User: My payment method is:');
        alert('Client: Give me your account number.');
        let accountNumber = prompt('User: Here is my account number:');
        alert(`Client: Payment to account number ${accountNumber} has been made.`);
        alert('User: Payment received.');
        alert('Payment successfully completed. Best wishes!');
    }, 5000);
} else if (currentUser.type === 'client') {
    alert('Welcome, Client! Here are some gigs by Rehmat Ullah:');
    currentUser.gigs.forEach((gig, index) => alert(`${index + 1}. ${gig.description} - $${gig.price}`));

    let selectedGigIndex = parseInt(prompt('Select a gig by number:')) - 1;
    let gigDescription = currentUser.gigs[selectedGigIndex].description;

    alert(`You selected: ${gigDescription}`);
    let userConfirmation = prompt('Do you want to proceed with this project? (yes/no)');
    if (userConfirmation.toLowerCase() === 'yes') {
        let projectDescription = prompt('Enter the project description:');
        alert(`Client: ${projectDescription}`);
        alert('User: I can make this.');

        let days = prompt('Client: How many days do you need for this project?');
        alert(`User: I need ${days} days.`);
        alert('Client: Ok, let’s proceed.');

        setTimeout(() => {
            alert('7 days have passed...');
            alert('User: The project is completed. Please review.');
            let review = prompt('Client: Review the project:');
            alert(`Client: ${review}`);
            alert('Client: What is your payment method?');
            let paymentMethod = prompt('User: My payment method is:');
            alert('Client: Give me your account number.');
            let accountNumber = prompt('User: Here is my account number:');
            alert(`Client: Payment to account number ${accountNumber} has been made.`);
            alert('User: Payment received.');
            alert('Payment successfully completed. Best wishes!');
        }, 5000);
    }
}
