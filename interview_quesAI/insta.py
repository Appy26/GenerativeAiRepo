from flask import Flask, jsonify, request

app = Flask(__name__)

# Initialize a list to store the posts
posts = []
post_id_counter = 1

# Endpoint for creating a new post
@app.route('/posts', methods=['POST'])
def create_post():
    global post_id_counter
    data = request.json

    # Extract the username and caption from the request data
    username = data.get('username')
    caption = data.get('caption')

    # Create a new post dictionary with a unique ID
    post = {'id': post_id_counter, 'username': username, 'caption': caption, 'likes': 0, 'comments': []}
    posts.append(post)

    post_id_counter += 1
    return jsonify({'message': 'Post created successfully'}), 201

# Endpoint for viewing all posts
@app.route('/posts', methods=['GET'])
def view_posts():
    return jsonify(posts)

# Endpoint for deleting a post by its ID
@app.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    post = next((p for p in posts if p['id'] == post_id), None)

    if post:
        posts.remove(post)
        return jsonify({'message': 'Post deleted successfully'})
    else:
        return jsonify({'error': 'Post not found'}), 404

# Endpoint for increasing likes of a post by 1
@app.route('/posts/<int:post_id>/like', methods=['POST'])
def like_post(post_id):
    post = next((p for p in posts if p['id'] == post_id), None)

    if post:
        post['likes'] += 1
        return jsonify({'message': 'Post liked successfully'})
    else:
        return jsonify({'error': 'Post not found'}), 404

# Endpoint for adding a comment to a post
@app.route('/posts/<int:post_id>/comment', methods=['POST'])
def add_comment(post_id):
    post = next((p for p in posts if p['id'] == post_id), None)

    if post:
        data = request.json
        comment = data.get('comment')

        if comment:
            post['comments'].append(comment)
            return jsonify({'message': 'Comment added successfully'})
        else:
            return jsonify({'error': 'Comment missing'}), 400
    else:
        return jsonify({'error': 'Post not found'}), 404

if __name__ == '__main__':
    app.run()
