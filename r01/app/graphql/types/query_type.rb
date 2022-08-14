module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :memos, [Types::MemoType], null: false
    field :memo, Types::MemoType do
      argument :id, ID, required: true
    end

    def memos
      Memo.all
    end

    def memo(id:)
      Memo.find(id)
    end
  end
end
