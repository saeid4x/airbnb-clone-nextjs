export { default } from "next-auth/middleware"

//protect urls against users that not login 
export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
}