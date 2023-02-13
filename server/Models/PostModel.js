import mongoose from 'mongoose';

const UserSchema = mongoose.Model(
    {
    userId: {type:String, required: true},
    desc:String,
    likes:[],
    image:String,

    },
    {
        timestamps: true
    }
)
