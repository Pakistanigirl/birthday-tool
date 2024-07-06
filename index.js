document.getElementById('calculate').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob').value);
    if (!dob) {
        alert('Please enter a valid date of birth.');
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    document.getElementById('age-result').textContent = `Your age: ${age} years old`;
    document.getElementById('birthday-result').textContent = `Days until next birthday: ${daysUntilNextBirthday} days`;
});
