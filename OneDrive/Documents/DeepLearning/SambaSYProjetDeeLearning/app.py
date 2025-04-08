import os
import numpy as np
from flask import Flask, render_template, request
from tensorflow.keras.models import load_model

# Initialiser l'application Flask
app = Flask(__name__)

# Charger les modèles pré-entraînés
model_cancer = load_model('model_breast_cancer.h5')
model_diabetes = load_model('mon_modele_diabete.h5')

# Routes de l'application
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict_cancer', methods=['POST'])
def predict_cancer():

        # Récupérer les données du formulaire
    features = [
    float(request.form['mean_radius']),
    float(request.form['mean_texture']),
    float(request.form['mean_perimeter']),
    float(request.form['mean_area']),
    float(request.form['mean_smoothness']),
    float(request.form['mean_compactness']),
    float(request.form['mean_concavity']),
    float(request.form['mean_concave_points']),
    float(request.form['mean_symmetry']),
    float(request.form['mean_fractal_dimension']),
    float(request.form['radius_error']),
    float(request.form['texture_error']),
    float(request.form['perimeter_error']),
    float(request.form['area_error']),
    float(request.form['smoothness_error']),
    float(request.form['compactness_error']),
    float(request.form['concavity_error']),
    float(request.form['concave_points_error']),
    float(request.form['symmetry_error']),
    float(request.form['fractal_dimension_error']),
    float(request.form['worst_radius']),
    float(request.form['worst_texture']),
    float(request.form['worst_perimeter']),
    float(request.form['worst_area']),
    float(request.form['worst_smoothness']),
    float(request.form['worst_compactness']),
    float(request.form['worst_concavity']),
    float(request.form['worst_concave_points']),
    float(request.form['worst_symmetry']),
    float(request.form['worst_fractal_dimension']),
]

    
        # Prédire avec le modèle, en supposant qu'il renvoie les probabilités
    prediction_proba = cancer_model.predict_proba([features])  # Renvoie un tableau de probabilités
    malignancy_prob = prediction_proba[0][1]  # Probabilité d'être malin

    # Interprétation de la prédiction
    result = "Malin" if malignancy_prob > 0.5 else "Bénin"

    return render_template('result.html', result=result , model="cancer")
    
    
# Gestionnaire d'erreurs
@app.errorhandler(400)
def bad_request(error):
    return "Bad Request: Please check your input and try again.", 400

@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    try:
        # Récupérer les données du formulaire
        features = [
            float(request.form['pregnancies']),
            float(request.form['glucose']),
            float(request.form['blood_pressure']),
            float(request.form['skin_thickness']),
            float(request.form['insulin']),
            float(request.form['bmi']),
            float(request.form['diabetes_pedigree_function']),
            float(request.form['age']),
        ]


        # Prédire avec le modèle
        prediction = model_diabetes.predict(np.array(features).reshape(1, -1))
        result = "diabetique" if prediction[0][0] > 0.5 else "non diabetique"

        return render_template('result.html', result=result, model="Diabete")
    
    except Exception as e:
        return f"Une erreur s'est produite: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
