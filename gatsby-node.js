// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project.tsx')
  const trainingTemplate = require.resolve('./src/templates/training.tsx')

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  )

  const resultTraining = await wrapper(
    graphql(`
      {
        trainings: allTrainingsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  )

  result.data.projects.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  })

  resultTraining.data.trainings.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: trainingTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`,
      },
    })
  })
  
}
