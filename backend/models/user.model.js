module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
        fname: String,
        lname: String,
        email: String,
        zip: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };