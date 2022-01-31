class Post < ApplicationRecord
  # broadcasts
  after_create_commit { broadcast_append_later_to('posts') }
  validates :title, presence: true
end
