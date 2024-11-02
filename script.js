const login = document.getElementById('login');
const logout = document.getElementById('logout');
const leaves = document.getElementById('leaves');
const audio1 = new Audio('./message.mp3');
const audio2 = new Audio('./alert.mp3');
const audio3 = new Audio('./large_alert.mp3');

// Employee class with login, logout, and leave methods
class Employee {
    login(loginTime) {
        alert(`The employee logged in at ${loginTime}`);
        audio1.play();
    }

    logout(logoutTime) {
        alert(`The employee logged out at ${logoutTime}`);
        audio2.play();
    }

    leaves(no) {
        if (no == 1) {
            alert(`The employee took ${no} leave for relief purposes.`);
        } else if (no == 2) {
            alert(`The employee took ${no} leaves for enjoyment purposes.`);
        } else if (no == 3) {
            alert(`The employee took ${no} leaves due to sickness.`);
        } else if (no == 4) {
            alert(`The employee took ${no} leaves for regular purposes.`);
        } else if (no >= 5 && no <= 7) {
            alert(`The employee took ${no} leaves, which is less than or equal to a week.`);
        } else if (no >= 8 && no <= 30) {
            alert(`The employee took ${no} leaves, which is more than a week.`);
        } else {
            alert(`The employee took an extended leave. Management may need to take action.`);
        }
        audio3.play();
    }
}

// Add event listeners for login, logout, and leave buttons
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const employee = new Employee();
    employee.login(login.value);
});

document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const employee = new Employee();
    employee.logout(logout.value);
});

document.getElementById('leaves-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const employee = new Employee();
    employee.leaves(leaves.value);
});