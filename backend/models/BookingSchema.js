import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  
    ticketPrice: {
      type: Number, 
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
    expiresAt: {  
      type: Date,
      default: () => new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
      index: { expires: 0 } 
    }
  },
  { timestamps: true }
);
bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "doctor",
    select: "name",
  });
  next();
})

export default mongoose.model("Booking", bookingSchema);