// import { v4 as uuidv4 } from 'uuid';
// const id = uuidv4();
const appointmentFakeData = [
    {
        id: 1,
        name: 'Masud Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isCancelled: false,
        isConfirmed: false
    },
    {
        id: 2,
        name: 'Sohel Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isCancelled: false,
        isConfirmed: false
    },
    {
        id: 3,
        name: 'Imrul Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isCancelled: false,
        isConfirmed: false
    },
    {
        id: 4,
        name: 'Shakil Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isCancelled: false,
        isConfirmed: false
    }
];
const appointmentFakeDataReceived = [
    {
        id: 5,
        name: 'Masud Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        isDuty: true
    },
    {
        id: 6,
        name: 'Sohel Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        isDuty: true
    },
    {
        id: 7,
        name: 'Imrul Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        isDuty: true
    },
    {
        id: 8,
        name: 'Shakil Rana',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        isDuty: true
    }
];
const previousFakeDataReceived = [
    {
        id: 17,
        name: 'Masud Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        isCancelled: false,
        isConfirmed: true,
        dutyPre: true
    },
    {
        id: 18,
        name: 'Sohel Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true,
        isCancelled: false,
        isConfirmed: true
    },
    {
        id: 19,
        name: 'Imrul Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true,
        isCancelled: false,
        isConfirmed: true
    }
];
const user = [
    {
        id: 9,
        name: 'Masud Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true
    },
    {
        id: 10,
        name: 'Sohel Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true
    },
    {
        id: 11,
        name: 'Imrul Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true
    },
    {
        id: 12,
        name: 'Shakil Khan',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: true
    }
];
const offlineUser = [
    {
        id: 13,
        name: 'Masud Islam',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: false
    },
    {
        id: 14,
        name: 'Sohel Islam',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: false
    },
    {
        id: 15,
        name: 'Imrul Islam',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: false
    },
    {
        id: 16,
        name: 'Shakil Islam',
        date: new Date(),
        title: 'Meeting For Vendor Community.',
        isAccepted: false,
        isCancelled: false,
        dutyPre: false
    }
];
const appointmentData = {
    appointmentFakeData,
    appointmentFakeDataReceived,
    previousFakeDataReceived,
    user,
    offlineUser
};
export default appointmentData;
