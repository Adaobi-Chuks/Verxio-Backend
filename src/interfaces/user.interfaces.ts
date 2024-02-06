export default interface IUser {
    username: string;
    email: string;
    password: string;
    role: string;
    isConfirmed: boolean;
    resetToken: string;
    confirmToken: string;
    tokenExpiration: Date;
    shippingAddress: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        email: string,
        country: string,
        state: string,
        city: string,
        address: string
    }
    id?: string
}