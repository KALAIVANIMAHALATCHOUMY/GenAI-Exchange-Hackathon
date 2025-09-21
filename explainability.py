
import shap

def explain(model, features):
    # Use LinearExplainer for linear models like LogisticRegression
    explainer = shap.LinearExplainer(model, features)
    shap_values = explainer.shap_values(features)
    return shap_values


