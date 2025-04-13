import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  senderId: mongoose.Types.ObjectId;
  receiverId: mongoose.Types.ObjectId;
  subject: string;
  content: string;
  isRead: boolean;
  readAt?: Date;
  relatedOrderId?: mongoose.Types.ObjectId;
  relatedProductId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema: Schema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isRead: {
      type: Boolean,
      default: false
    },
    readAt: {
      type: Date
    },
    relatedOrderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    },
    relatedProductId: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  },
  {
    timestamps: true
  }
);

// Create indexes for efficient queries
MessageSchema.index({ senderId: 1, createdAt: -1 });
MessageSchema.index({ receiverId: 1, createdAt: -1 });
MessageSchema.index({ isRead: 1, receiverId: 1 });
MessageSchema.index({ relatedOrderId: 1 });
MessageSchema.index({ relatedProductId: 1 });

export default mongoose.model<IMessage>('Message', MessageSchema); 