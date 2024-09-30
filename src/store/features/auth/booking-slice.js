import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BookingData: {
    name: "",
    lastname: "",
    email: "",
    number: "",
    checkin: "",
    checkout: "",
    guestCount: "",
    days: "",
    hotelId: "",
    price: "",
  }
};

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookingDetails: (state, action) => {

      state.BookingData = {
        ...state.BookingData,
        ...action.payload
      }
    },
  },
});

export const { bookingDetails } = bookSlice.actions;
export default bookSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   BookingData: [], // Initialize BookingData as an array
// };

// export const bookSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     bookingDetails: (state, action) => {
//       // Check if BookingData is an array before pushing
//       if (Array.isArray(state.BookingData)) {
//         state.BookingData.push({
//           name: action.payload.name || "",
//           lastname: action.payload.lastname || "",
//           email: action.payload.email || "",
//           number: action.payload.number || "",
//           checkin: action.payload.checkin || "",
//           checkout: action.payload.checkout || "",
//           guestCount: action.payload.guestCount || "",
//           days: action.payload.days || "",
//           hotelId: action.payload.hotelId || "",
//           price: action.payload.price || "",
//         });
//       } else {
//         // If somehow BookingData is not an array, reset it as an array
//         state.BookingData = [
//           {
//             name: action.payload.name || "",
//             lastname: action.payload.lastname || "",
//             email: action.payload.email || "",
//             number: action.payload.number || "",
//             checkin: action.payload.checkin || "",
//             checkout: action.payload.checkout || "",
//             guestCount: action.payload.guestCount || "",
//             days: action.payload.days || "",
//             hotelId: action.payload.hotelId || "",
//             price: action.payload.price || "",
//           },
//         ];
//       }
//     },
//     clearBookings: (state) => {
//       // Clear all bookings
//       state.BookingData = [];
//     },
//   },
// });

// export const { bookingDetails, clearBookings } = bookSlice.actions;
// export default bookSlice.reducer;
