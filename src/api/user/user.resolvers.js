module.exports = {
  Query: {
    async user (_, args, ctx) {
      const user = await ctx.models.user.findOne({ phone: args.phone }).exec()
      return user
    },
    users (_, args, ctx) {
      return ctx.models.user.find({ city: args.city }).exec()
    }
  },
  Mutation: {
    createUser (_, args, ctx) {
      return ctx.models.user.create(args.input)
    },
    async updateUser (_, args, ctx) {
      const { id, input } = args
      await ctx.models.user.updateOne({ id }, input)

      const user = ctx.models.user.findOne({ id })

      return user
    }
  }
}
