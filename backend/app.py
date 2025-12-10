from flask import Flask,request,jsonify


app = Flask(__name__)

result = []

@app.route('/submit', methods=['POST'])
def submit():
    
    data = request.get_json()
    result.append(data)
   
@app.route('/display', methods=['GET'])
def display():
    
    return jsonify(result)
if __name__ == '__main__':

    app.run(port=8000, host='0.0.0.0')
