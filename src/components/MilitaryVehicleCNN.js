import React from 'react';

export function MilitaryVehicleCNN() {
  return (
    <div className="project-container">
      <h1>Image Classification of Military Vehicles CNN</h1>
      <img src="drones.jpg" alt="drones" style={{ width: '500px', height: 'auto'}}></img>
      <h2>by Liam Bouffard</h2>
      <h2>Drone Tank</h2>
      <p>
        This project implements a Convolutional Neural Network (CNN) using PyTorch to classify images into three categories: 
        <strong> tank, aircraft, and drone</strong>. It utilizes custom image datasets for training and testing and applies 
        several transformations to augment the data.
      </p>

      <h2>Setup</h2>
      <p>
        Before running the project, ensure that you have the required dependencies installed. Click on this link and scroll 
        down to make sure you download the correct PyTorch for your system:{" "}
        <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
          PyTorch Official Website
        </a>
      </p>
      <p>Additionally, install pandas with pip:</p>
      <code>pip install pandas</code>

      <h2>Jumping Right In</h2>
      <p>To review code, check out:</p>
      <code>main.py</code>

      <p>To run a pretrained CNN:</p>
      <code>python run_trained_cnn.py</code>

      <h2>Dataset</h2>
      <p>
        The project assumes that you have a dataset of images with corresponding labels. The dataset should be divided 
        into two parts: a training set and a testing set. Each set should have an accompanying CSV file:
      </p>
      <ul>
        <li><code>train_csv.csv</code> - for training data</li>
        <li><code>test_csv.csv</code> - for testing data</li>
      </ul>
      <p>File Structure:</p>
      <ul>
        <li>Training images: <code>./data/train_data/</code></li>
        <li>Test images: <code>./data/test_data/</code></li>
      </ul>

      <h2>Data Preprocessing</h2>
      <p>Data is preprocessed using the following transformations:</p>
      <ul>
        <li>Resize images to 256x256.</li>
        <li>Apply random horizontal flips and rotations.</li>
        <li>Normalize the pixel values.</li>
      </ul>
      <p>These transformations help augment the dataset and improve generalization during training.</p>

      <h2>Model Architecture</h2>
      <p>The model is a simple CNN built with PyTorch. It consists of three convolutional layers followed by batch normalization and pooling layers, along with fully connected layers at the end.</p>
      <ul>
        <li><strong>Conv Layers:</strong> 3 convolutional layers with 16, 32, and 64 filters, respectively.</li>
        <li><strong>BatchNorm:</strong> Batch normalization after each convolution to stabilize training.</li>
        <li><strong>Pooling:</strong> Max pooling after each convolutional block.</li>
        <li><strong>Fully Connected:</strong> Three fully connected layers that map the flattened output to the final classification.</li>
      </ul>

      <h2>Training, Testing, and Evaluating</h2>
      <p>The model is trained for 10 epochs using a <strong>CrossEntropyLoss</strong> function and the Adam optimizer. Training progress is logged at every 10 steps.</p>
      
      <h3>To start training:</h3>
      <code>python main.py</code>

      <h3>Training loop:</h3>
      <ul>
        <li>Loads data in batches of size 32.</li>
        <li>Runs forward pass, calculates loss, backpropagates, and updates the model.</li>
        <li>Outputs the loss every 10 steps.</li>
      </ul>

      <h2>Testing</h2>
      <p>After training, the model is evaluated on the test dataset. The accuracy for each class (tank, aircraft, drone) is printed out at the end.</p>

      <h2>Evaluation</h2>
      <p>Calculates the accuracy for each class based on the correct predictions.</p>
      <p>Example output: <code>cnn_output</code></p>

      <h2>Model Saving</h2>
      <p>After training, the model's parameters are saved to <code>cnn_parameters.pth</code>:</p>
      <code>torch.save(cnn.state_dict(), "cnn_parameters.pth")</code>
    </div>
  );
};

