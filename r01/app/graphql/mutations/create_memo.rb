module Mutations
  class CreateMemo < BaseMutation
    field :memo, Types::MemoType, null: false

    argument :content, String, required: true

    def resolve(**params)
      memo = Memo.create!(params)
      { memo: memo }
    end
  end
end
