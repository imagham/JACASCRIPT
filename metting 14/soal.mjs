// no 1
const simulateDelay = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Delay Finished');
        }, 2000);
    });
}

simulateDelay().then((message) => {
    console.log(message); 
});
// end no 1
// no 2
const calculateDivision = async (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === 0) {
            reject(new Error("Division by zero is not allowed"));
        } else {
            const result = b / a;
            resolve(`Result: ${result}`);
        }
    });
};

const executeCalculation = async () => {
    try {
        const message = await calculateDivision(0, 7);
        console.log(message);
        console.log("After condition is fulfilled");
    } catch (error) {
        console.log("Error:", error.message); 
    }
};

// Memanggil fungsi dengan await
(async () => {
    await executeCalculation();
})();

// end no 2
// no 3
const task1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 selesai dalam 1 detik");
        }, 1000); 
    });
};

const task2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 selesai dalam 2 detik");
        }, 2000); 
    });
};

const performTasks = async () => {
    try {
        const result1 = await task1();
        const result2 = await task2();

        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.log("Terjadi kesalahan:", error.message);
    }
};

performTasks();
// end no 3
// no 4
const getUserProfile = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json(); 
        if (user.name === "Leanne Graham") {
            console.log("user is Leanne Graham");
        } else {
            console.log("user is not Leanne Graham");
        }
    } catch (error) {
        console.log("Error fetching user data:", error.message);
    }
};

getUserProfile();
// endno 4
// no 5
const getPostDetails = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (response.status !== 200) {
            console.log("Failed to fetch post");
            return;
        }

        const post = await response.json();

        console.log("Post Title:", post.title);
    } catch (error) {
        console.log("Error fetching post data:", error.message);
    }
};

getPostDetails();
// end no 5
// no 6
const checkPostAvailability = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');

        if (response.status !== 200) {
            console.log("Failed to fetch post");
            return;
        }

        const post = await response.json();

        if (post.userId > 5) {
            console.log("post is available for user IDs greater than 5");
        } else {
            console.log("post is not available for user IDs greater than 5");
        }
    } catch (error) {
        console.log("Error fetching post data:", error.message);
    }
};

checkPostAvailability();

