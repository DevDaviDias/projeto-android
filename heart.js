<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Heart</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Configuração da cena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Forma do coração em 3D
        const heartShape = new THREE.Shape();
        heartShape.moveTo(0, 0);
        heartShape.bezierCurveTo(2, 2, 2, 0, 2, 0);
        heartShape.bezierCurveTo(2, -3, 0, -4, 0, -4);
        heartShape.bezierCurveTo(-3, -4, -3, 2, -3, 2);
        heartShape.bezierCurveTo(-3, 5, 0, 7, 0, 7);
        heartShape.bezierCurveTo(0, 7, 3, 5, 3, 2);
        heartShape.bezierCurveTo(3, 2, 3, -4, 0, -4);
        heartShape.bezierCurveTo(0, -4, -2, -3, -2, 0);
        heartShape.bezierCurveTo(-2, 0, -2, 2, 0, 0);

        // Extrapolação da forma do coração em 3D
        const extrudeSettings = {
            steps: 100,
            depth: 2,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 5
        };

        const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        const heart = new THREE.Mesh(geometry, material);
        scene.add(heart);

        camera.position.z = 5;

        // Função de renderização
        function animate() {
            requestAnimationFrame(animate);
            heart.rotation.x += 0.01;
            heart.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    </script>
</body>
</html>
